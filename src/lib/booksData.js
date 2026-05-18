export const fetchRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`);
    const data = await res.json();
    return data || [];
}
export const fetchFeaturedRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`);
    const data = await res.json();
    return data || [];
}
