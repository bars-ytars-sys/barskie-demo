export const site = {
name:'Барские поля', legalName:'База отдыха «Барские поля»', url:'https://barskie-polya.ru',
phone:'+7 (495) 150-39-08', phoneHref:'tel:+74951503908', hours:'Ежедневно с 9:00 до 24:00',
address:'Московская область, Новорижское шоссе, деревня Степаньково',
geo:{lat:56.095332,lon:36.469182}, telegram:'https://t.me/bazabarskie_polya',
yandexMaps:'https://yandex.ru/maps/org/barskiye_polya/218830724182/',
booking:'https://barskie-polya.ru/booking',email:'BR.BP.House@yandex.ru'
} as const;
export const nav=[{href:'/#doma',label:'Дома'},{href:'/#special',label:'Специальные предложения'},{href:'/#relax',label:'Банный отдых'},{href:'/#booking',label:'Онлайн-подбор дома'},{href:'/#contacts',label:'Контакты'}];
export const rub=(n:number)=>n.toLocaleString('ru-RU')+' ₽';
export const link=(p:string)=>import.meta.env.BASE_URL.replace(/[/]$/,'')+p;
