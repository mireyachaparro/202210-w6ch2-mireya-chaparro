export const consoleDebug = (info: unknown) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(info);
    }
};
