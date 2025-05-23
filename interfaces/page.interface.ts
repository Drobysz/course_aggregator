export enum TopPageCategory {
  Courses=0,
  Services=1,
  Tutors=4,
  Products=3
}

export interface TopPageModel {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: TopPageCategory
    advantages: Advantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh: HhData   
    qas: any[]
    addresses: any[]
    categoryOn: string
    blog: Blog
    sravnikus: Sravnikus
    learningclub: Learningclub
  }
  
  export interface Advantage {
    title: string
    description: string
    _id: string
  }
  
  export interface HhData {
    count?: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: string
    _id: string
  }
  
  export interface Blog {
    h1: string
    metaTitle: string
    metaDescription: string
    views: number
    _id: string
  }
  
  export interface Sravnikus {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
  }
  
  export interface Learningclub {
    metaTitle: string
    metaDescription: string
    qas: any[]
    _id: string
  }
  