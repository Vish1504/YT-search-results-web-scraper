const puppeteer=require('puppeteer');

(async()=>{
    const browser=await puppeteer.launch();
    const page=await browser.newPage();
    await page.goto("https://www.youtube.com/results?search_query=programming")
    const search= await page.evaluate(()=>{
        const search_results=document.querySelectorAll(".text-wrapper.style-scope.ytd-video-renderer");
        const lists=[];
        search_results.forEach(elements => {
            const vidname=elements.querySelector("h3");
            // const quotetext=quoteinfo[0];
            const channel=elements.querySelector("a.yt-simple-endpoint.style-scope.yt-formatted-string");

            lists.push({
                video_name:vidname.innerText,
                channel_name:channel.innerHTML
            });
        });
        return lists;

    })
    console.log(search);
    await browser.close();
})()
console.log("END");