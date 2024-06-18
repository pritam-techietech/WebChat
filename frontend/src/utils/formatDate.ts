export function formatDate(dateString:string):string{
    return new Date(dateString).toLocaleTimeString("en-US",{
        hour: "numeric",
        minute: "numeric",
        hourCycle: "h23"
    });
}
// export function formatDate(dateString:string):string{
//     return new Date(dateString).toLocaleDateString("en-US",{
//         hour: "numeric",
//         minute: "numeric",
//         hourCycle: "h23"
//     });
// }