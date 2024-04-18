export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d);
    const day = new Date(date).getDate();
    return `${day} ${month} ${year}`;
}