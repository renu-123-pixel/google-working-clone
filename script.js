const searchInput=document.querySelector("#search-input");
const currentWidth=window.innerWidth;


searchInput.addEventListener("keydown",function(event)
{
    if(event.code=== "Enter")
    {
        search();
    }
});

function search()
{
    const input=searchInput.value;

    window.location.href="https://www.google.com/search?q="+ input +"&sxsrf=APwXEdec9-5oZCFVszKiDtwLev_nWRDW8Q%3A1686077799436&source=hp&ei=Z4F_ZK64F-LhseMP5JGpWA&iflsig=AOEireoAAAAAZH-Pd4JYy6ctqI10l7NYuXsnvzsQSXxi&ved=0ahUKEwjuh6-iqa__AhXicGwGHeRICgsQ4dUDCAg&uact=5&oq="+ input +"&gs_lcp=Cgdnd3Mtd2l6EAMyBwgjEIoFECcyCgguEIoFELEDEEMyCggAEIoFELEDEEMyDQguEIoFELEDENQCEEMyBwguEIoFEEMyDQguEIoFEMcBENEDEEMyDQguEIoFELEDEIMBEEMyBwgAEIoFEEMyBwgAEIoFEEMyBwgAEIoFEEM6BAgjECc6CAgAEIoFEJECOgsILhCABBCxAxCDAToLCAAQgAQQsQMQgwE6CwgAEIoFELEDEIMBOhEILhCDARDHARCxAxDRAxCABDoFCAAQgAQ6DQgAEIoFELEDEIMBEENQAFjFBmD4DGgAcAB4AIABuAGIAeQGkgEDMC41mAEAoAEB&sclient=gws-wiz";
}

