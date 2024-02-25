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
    long_image1!:string
    short_image1!:string
    long_image2!:string
    short_image2!:string   
}

export class projectList {
    count!:number
    next!:URL
    previous!:URL
    results!:project[]
} 

export class emailFields {
    name!:string
    email!:string
    company!:string
    requirements!:string
}

export class selCategory {
    Transportation: boolean = false
    Industrial: boolean = false
    Retail: boolean = false
    Branding: boolean = false
    Packaging: boolean = false
    UI: boolean = false
}