export function getDateFormatted() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    let formattedDate = '';

    if (day <= 15) {
        const twoMonthsBack = new Date(year, month - 3, 1);
        formattedDate = twoMonthsBack.getFullYear().toString() + ('0' + (twoMonthsBack.getMonth() + 1)).slice(-2);
    } else {
        const previousMonth = new Date(year, month - 2, 1);
        formattedDate = previousMonth.getFullYear().toString() + ('0' + (previousMonth.getMonth() + 1)).slice(-2);
    }

    return formattedDate;
}