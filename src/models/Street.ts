export interface StreetCamera {
    serialNumber: number;
    carFlow: number;
    humanFlow: number;
}

export interface Street {
    name: string;
    cameras: StreetCamera[];
}
