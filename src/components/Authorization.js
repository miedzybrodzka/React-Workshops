const getUserName = () => {
    const user = localStorage.getItem('user-name');
    return user;
}
export default getUserName;