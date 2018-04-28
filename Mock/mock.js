let Mock=require('mockjs');
let Random=Mock.Random;

module.exports=()=>{
    let data={
      slides: [],
      categories: [],
      shops: []
    };
    // slides
    for (let i = 1; i < 3; i++){
      data.slides.push({
        id: i,
        image: Random.image('375x190', '#894FC4', '#FFF', 'png', 'Swiper'),
        link: ''
      })
    }
    // categories
    for (let i = 1; i < 10; i++) {
      data.categories.push({
        id: i,
        name: Random.cword(2,4),
        icon: Random.image('35x35', '#FF6600', '#FFF', 'png', 'Icon')
      })     
    }
    // shops
    let images=[1,2,3,4,5].map(x=>Random.image('375x290',Random.color(),'Shops'));
    let commentImages=[1,2,3,4,5].map(x=>Random.image('375x290',Random.color(),'commentImages'));
    let tags=[1,2,3,4,5].map(x=>Random.cword(3,5));
    let comments = [0,10].map(x=>{
      return {name: Random.cname(),
      data: Random.date(),
      content: Random.csentence(),
      rating: Random.natural(60, 100) + '%',
      images: commentImages}
    })
    
    for (let i = 1; i < 50; i++) {
      data.shops.push({
        id: i,
        name: Random.csentence(2,5),
        phone: '18270821320',
        address: Random.county(true) + Random.csentence(2,3,4,5),
        images: images,
        score: Random.integer(60, 100),
        tags: tags,
        comments: comments,
        businessHours: '周一至周五09:30-00:30周六00:00-00:30周日09:30-24:00',
        supportService: Random.csentence(),
        introduction: '',
        link: Random.url(),
        categoryId: Random.natural(1, 9)
      })
    }
    return data
}