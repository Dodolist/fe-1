export const formatDate = (date, format) => {
    if (!(date instanceof Date) || isNaN(date)) {
        return date;
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);
    const day = String(date.getDate());

    const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토'];
    const dayOfWeek = DAYS_OF_WEEK[date.getDay()];

    switch (format) {
        case 'YYYY-MM-DD':
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        case 'YYYY년 MM월 DD일':
            return `${year}년 ${month.padStart(2, '0')}월 ${day.padStart(
                2,
                '0'
            )}일`;
        case 'M월 D일 ddd':
            return `${month}월 ${day}일 ${dayOfWeek}요일`;
        default:
            return `${year}-${month}-${day}`;
    }
};

export const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
