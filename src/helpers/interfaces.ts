export class article {
    id!:string
    title!:string
    news_agency!:string
    link!: string
}
export class project {
    id!:string      
    category!:string 
    title!:string    
    client!: string   
    service!:string  
    date!: Date  
    duration!:string 
    country!:string  
    context!:string  
    approach!:string
    long_image1!:URL
    short_image1!:URL
    long_image2!:URL
    short_image2!:URL   
}

export class projectList {
    count!:number
    next!:URL
    previous!:URL
    results!:project[]
} 


export class selCategory {
    Transportation: boolean = false
    Industrial: boolean = false
    Retail: boolean = false
    Branding: boolean = false
    Packaging: boolean = false
    UI: boolean = false
}