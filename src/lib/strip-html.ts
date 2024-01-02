export const stripHtml = (str: string) => str.replace(/(<([^>]+)>)/gi, "");

export const setTitle = (title: string) => (title ? `${title} | UYD` : "UYD");
