
export class SubItem {
    text: string;
    route: string;
}

export class MenuItem {
    text: string;
    route: string;
    subItems: Array<SubItem>;
}    
