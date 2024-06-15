const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
        ...(date.getHours() == 0 ? {} : { timeStyle: 'short' }),
    });
    const formattedDate = formatter.format(date);
    return formattedDate;
};

export default formatDate;
