export interface Repository<T> {
    getAll: () => Promise<Array<T>>;
    get?: (id: number) => Promise<T>;
    create: (item: Partial<T>) => Promise<T>;
    update: (item: Partial<T>) => Promise<T>;
    delete: (id: number) => Promise<void>;
}
