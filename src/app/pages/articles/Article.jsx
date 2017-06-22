import React from "react";
import * as axios from "axios";

export default class Article extends React.Component {
    componentWillMount() {
        this.state = {mode: -10};
        this.id = this.props.params.id || 0;
        this.loadArticle();
    }

    loadArticle() {

    }

    getArticleMarkup() {
        return (
            <article className="article jumbotron">
                <div className="container">
                    <h1>{this.article.title}</h1>
                    <p>{this.article.description}</p>
                    <span className="label label-info">Author: {this.article.author}</span>
                </div>
            </article>
        );
    }

    render() {
        switch (this.state.mode) {
            case 0:
                return this.getArticleMarkup();
            case -1:
                return <div className="alert alert-danger">Article not found</div>;
            case -10:
                return <div className="alert alert-waring">Loading</div>;
        }
    }
}