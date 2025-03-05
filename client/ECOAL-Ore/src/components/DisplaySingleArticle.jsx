import {Link} from "react-router-dom"

function DisplayAllArticles(props){
  
    function makeResume(text, length) {
        return text.length > length ? text.slice(0, length) + "…" : text;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-EN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).format(date);
    };
    return (
        <div key={props.index}>
            <h2><Link to={"/articles/"+props.article.id}>{props.article.title}</Link></h2>
            <span>{makeResume(props.article.content, 10)}</span>
            <p>Created at :{formatDate(props.article.created_at)}</p>
            <img src={props.article.mediaURL} alt=""/>
        </div>
    )
}





export default DisplayAllArticles;