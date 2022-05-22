const pdfjs = require('pdfjs-dist');
// import {pdfjsLib} from 'pdfjs-dist';

const getContent = async(src) => {
    const doc = await pdfjs.getDocument(src).promise
    .then(function(doc) {
        console.log('doc:', doc)
    })

    // console.log('doc:', doc)
    // const page = await doc.getPage(1);
    // console.log('page:', page)
    // return await page.getTextContent(); 
};

export const getItems = async (src) => {
    const content = await getContent(src);
    console.log('content:', content)
    // const items = content.items.map((item) => {
    //     return console.log('item:', item[0])
    // })
    // return items;
};