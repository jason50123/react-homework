function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
    <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
    />
    );
}

function UserInfo(props) {
    return (
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
    </div>
    );
}

class App1 extends React.Component {
    render(){
        return (
            <div className="Comment">
                <UserInfo user={this.props.author} />
                <div className="Comment-text">{this.props.text}</div>
                <div className="Comment-date">
                {formatDate(this.props.date)}
                </div>
            </div>
            );
    }

}

export default App1;
