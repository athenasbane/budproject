import { CurrencyISOEnum } from '../Enum/Currency.enum';

export interface IProvider {
    title: string;
    account_number: number;
    sort_code: string;
    description: string;
}

export interface ITransaction {
    id: string;
    date: string;
    description: string;
    category_title: string; // I would prefer this to be a enum but Monzo allows for custom categories
    amount: {
        value: number;
        currency_iso: CurrencyISOEnum;
    };
}

export interface IApi {
    id: string;
    provider: IProvider;
    balance: {
        amount: string;
        currency_iso: CurrencyISOEnum;
    };
    transactions: ITransaction[];
}
