export interface Fetched {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: Employee[];
        support: Support;
}


export interface Employee {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
}

export interface Support {
        url: string;
        text: string;
}