
const User = ({user}) => {
    const {id, name, email, phone}= user;
    return (
        <div className="user">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>

        </div>
    );
};

export default User;