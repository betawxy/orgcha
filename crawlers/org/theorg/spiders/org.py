import scrapy


class OrgSpider(scrapy.Spider):
    name = 'org'
    allowed_domains = ['theorg.com']
    start_urls = ['https://theorg.com/explore/organizations/']

    def parse(self, response):
        yield from response.follow_all(response.css('._3awnS > a'), self.parse_org)

    def parse_org(self, response):
        meta_div = response.css('.BiP3H')
        yield {
            "slug": response.url.split('/')[-1],
            "name": response.css('._3byAW h1::text').get(),
            "image": response.css('.KpuKT > img').attrib['src'],
            "about": response.css('._3kWGg > p::text').get(),
            "website": response.css('.BiP3H ._2Wnhk._1gGvY > a').attrib['href'],
            "hq": response.css('.BiP3H ._2Wnhk > address > a::text').get(),
            "industry": response.xpath('//ul/li[3]/div[2]/a').css('a::text').get(),
            "hq": response.css('.BiP3H ._2Wnhk > address > a::text').get(),
        }
        yield from response.follow_all(
            response.xpath('//*[@id="app"]/div[1]/div/div/div[2]/nav/div/div/ul/li[2]/a'),
            self.parse_org_chart)
    
    def parse_org_chart(self, response):
        arr = response.css('._2Arlv ._1lrdz a').attrib['href'].split('/')
        yield {
            "orgSlug": arr[-3],
            "roleSlug": arr[-1]
        }

        yield from response.follow_all(response.css('._37ODz a'), self.parse_person)
    
    def parse_person(self, response):
        managerSlug = ''
        directReportsSlugs = []
        for s in response.css('._10r6b'):
            if s.css('._2gF4x::text').get() == 'Manager':
                managerSlug = s.css('._3cH96 a').attrib['href'].split('/')[-1]
            elif s.css('._2gF4x::text').get() == 'Direct reports':
                directReportsSlugs = [ss.css('a').attrib['href'].split('/')[-1] for ss in s.css('._3cH96')]
        yield {
            'slug': response.url.split('/')[-1],
            'name': response.css('.LjSHs::text').get(),
            'image': len(response.css('._2a1Wt img')) > 0 and response.css('._2a1Wt img').attrib['src'] or '',
            'role': response.css('._3_HkV::text').get(),
            'orgSlug': response.url.split('/')[-3],
            'managerSlug': managerSlug,
            'directReportsSlugs': directReportsSlugs,
            'bio': response.css('._1ZR7c::text').get(),
        }

        yield from response.follow_all(response.css('._3r7Af ._3cH96 a'), self.parse_person)
