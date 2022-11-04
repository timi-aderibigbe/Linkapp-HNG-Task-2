import React from "react";
import slackLogo from '../assets/slack.png'
import githubLogo from '../assets/github.png'

export default function BodyFootnote(){

    return(
        <div className="slack-github-logo-wrapper my-4">
            <img className="footnote-img me-3" src={slackLogo} alt="Slack Logo" />
            <img className="footnote-img" src={githubLogo} alt="Github Logo" />
        </div>
    )
}