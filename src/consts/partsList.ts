const title_dom = {
    "h2": "<h2>[見出し2]</h2>",
    "h3": "<h3>[見出し3]</h3>",
    "h4": "<h4>[見出し4]</h4>",
}
const image_dom = {
    "1カラム": `<img src="#"/>`,
    "2カラム": `<img src="#"/><img src="#"/>`,
    "3カラム": `<img src="#"/><img src="#"/><img src="#"/><img src="#"/>`,
}

interface ITempateData {
    [group: string]: {
        [title: string]: string;
    }
}
export const PARTS_LIST: ITempateData = {
    "見出し": title_dom,
    "画像": image_dom,
};
