export interface StreetCamera {
    serialNumber: number;
    carFlow: number;
    humanFlow: number;
    videoAddress: string;
}

export interface Street {
    name: string;
    cameras: StreetCamera[];
}
