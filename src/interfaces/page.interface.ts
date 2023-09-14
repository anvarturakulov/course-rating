export enum TopLevelCategory {
    Courses,
    Services,
    Books, 
    Products,
}

export interface TopPageModel {
    _id: string
    tags: string[]
    secondCategory: string
    alias: string
    title: string
    category: string
    seoText?: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: TopLevelCategory
    advantages?: TopPageAdvantage[]
    createdAt: string
    updatedAt: string
    __v: number
    hh?: HhData
    qas: string[]
    addresses: string[]
    categoryOn: string
    blog: Blog
    sravnikus: Sravnikus
    learningclub: Learningclub
}

export interface TopPageAdvantage {
    title: string
    description: string
    _id: string
}

export interface HhData {
    count: number
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
    qas: string[]
    _id: string
}

export interface Learningclub {
    metaTitle: string
    metaDescription: string
    qas: string[]
    _id: string
}
