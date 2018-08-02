import * as React from 'react';
export interface ContactListItemProps{
    name:string;
    market: string;
    cohort: string;
    phone: string;
    email: string;
    img: string;
    fact: string;
    found: boolean;
    id: string;
}
export class ContactListItem extends React.Component<ContactListItemProps>{

    render()
    {
        var blur = "";
        if (!this.props.found)
        {
            blur=" blur";
        }
        return <li className="list-group-item">
    <div className="row w-100">
         <div className="col-12 col-sm-6 col-md-3 px-0">
            <img src={this.props.img} className="img-fluid rounded-circle d-block mx-auto"/>
        </div> 
        <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <label className="name lead">{this.props.name}</label>
            <br/>
            <div className={blur}>
            <span className="fas fa-building fa-fw text-muted listicon" data-toggle="tooltip" ></span>
            <span className="text-muted">{this.props.market}</span>
            <br/>
            <span className="fas fa-briefcase fa-fw text-muted listicon" data-toggle="tooltip" ></span>
            <span className="text-muted">{this.props.cohort}</span>
            <br/>
            <span className="fa fa-fw fa-phone fa-fw text-muted listicon" data-toggle="tooltip" ></span>
            <span className="text-muted small">{this.props.phone}</span>
            <br/>
            <span className="fa fa-fw fa-envelope fa-fw text-muted listicon" data-toggle="tooltip" ></span>
            <span className="text-muted small text-truncate">{this.props.email}</span>
            <br/>
            <br/>
            <span className="fab fa-fly fa-fw text-muted fa-lg listicon" data-toggle="tooltip" ></span>
            <span className="text-muted">{this.props.fact}</span>
            </div>
        </div>
        </div>
    </li>
}
}