import rawData from "@/assets/json/Portfolio.json"
import {Type, plainToInstance} from 'class-transformer'

/**
 * Currently not used, due to not being able t osolve typescript complaints
 */
import 'reflect-metadata';
export class PortfolioItem {
    public title: string
    public start: Date | undefined
    public end: Date | undefined
    public type: string 
}

export class PortfolioLanguage {
    public title: string
    public code: string
    public supported: boolean 
}

export class Portfolio {
    @Type(() => PortfolioItem)
    public experiences: PortfolioItem[]

    
    @Type(() => PortfolioItem)
    public projects: PortfolioItem[]

    
    @Type(() => PortfolioItem)
    public skills: PortfolioItem[]

    
    @Type(() => PortfolioItem)
    public hobbies: PortfolioItem[]  

    
    @Type(() => PortfolioLanguage)
    public languages: PortfolioLanguage[]
}



const portfolioData = plainToInstance(Portfolio, rawData)
export {portfolioData}