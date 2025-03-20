import puppeteer from "puppeteer";
import { CronJob } from "cron";

const scrap = async () => {
    try {
        const browser = await puppeteer.launch({
            product: "firefox",
            headless: true
        });
        const page = await browser.newPage();
        await page.goto("https://www.mozilla.org");
        const elements = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('strong.m24-c-launchpad-title')).map(div => div.innerText.replace(":", ""));
        });
        console.log(elements);
        await browser.close();

        console.log("[INFO-SV]: Success Scraping Property");
    } catch (error) {
        console.log(`[INFO-SV]: Error Scraping Property\n ${error}`);
    }
}

export const scrapJob = new CronJob(
    '*/5 * * * * *',
    scrap,
    true,
    'America/Santiago'
);