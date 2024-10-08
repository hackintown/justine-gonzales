import { NextResponse } from "next/server";

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/ayala-greenfield-estate</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/arcilo</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/ciela-aera-heights</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/lanewood-hills</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/miravera-altaraza</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/the-courtyards-vermosa</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/arbor-lanes</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/gardencourt-residences</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/park-central-towers</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/parklinks-north-south-towers</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/the-alcoves</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/residences-azuela-cove</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/one-vertis-plaza</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.ayalalandpremierluxuryhomesph.com/properties/anvaya-cove</loc>
  <lastmod>2024-10-03T07:16:30+00:00</lastmod>
  <priority>0.80</priority>
</url>


</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
