import * as React from 'react';
import './App.css';
import { ContactListItem, ContactListItemProps } from './ContactListItem';
import dolphin from './dolphin.png';

interface ContactListItemData {
    name: string;
    market: string;
    cohort: string;
    phone: string;
    email: string;
    img: string;
    fact: string;
    blur: boolean;
}
interface ContactListState {
    items: Array<ContactListItemData>;
}

class ContactList extends React.Component<{}, ContactListState> {

    constructor(p: {}) {
        super(p);
        this.state = {
            items: []
        }
    }

    public render() {

        var item: ContactListItemProps = { name: "Morgan Radic", cohort: "C1", phone: "(717) 654-5275", email: "morgan.radic@parivedasolutions.com", market: "Washington, D.C.", fact: "I really want this to work! I really do!" };
        var data = [item];
        return (
            <div className="container">
            {/* <!-- Add Profile Modal --> deleted tabindex!!!*/}
            <div className="modal fade" id="addProfileModal" role="dialog" aria-labelledby="addProfileModalCenter" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addProfileModalCenterTitle">Add a Fellow Fin</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="container">
                                <div className="modal-body">
                                    <div className="input-area row justify-content-center">
                                        <label className="col-3">Fin ID :</label>
                                        <input className="col-9" type="text" name="finid" id="finid" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Add Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- User Profile Modal -->  deleted tabindex!!!@*/}
                <div className="modal fade" id="myProfileModal" role="dialog" aria-labelledby="myProfileLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="container">
                                    <h5 className="modal-title col-md-4" id="exampleModalLabel">Morgan Radic</h5>
                                    <button className="button col-md-6" id="profileEditBtn">Edit</button>
                                    <button type="button" className="close col-md-2" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="card">
                                        <img className="img-fluid rounded-circle d-block mx-auto" height="50%" width="50%" src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg" alt="Morgan Radic" />
                                        <div className="card-body">
                                            <label className="fas fa-building fa-fw text-muted fa-2x listicon" data-toggle="tooltip" title="" data-original-title="NewYork" />
                                            <span className="card-text">Washington D.C.</span>
                                            <br />
                                            <label className="fas fa-briefcase fa-fw text-muted fa-2x listicon" data-toggle="tooltip" title="" data-original-title="C2" />
                                            <span className="card-text">C1</span>
                                            <br />
                                            <label className="fa fa-fw fa-phone fa-fw text-muted fa-2x listicon" data-toggle="tooltip" title="" data-original-title="(867) 322-1852" />
                                            <span className="card-text">(215)867-5309</span>
                                            <br />
                                            <label className="fa fa-fw fa-envelope fa-fw text-muted fa-2x listicon" data-toggle="tooltip" title="" data-original-title="debbie.schmidt@example.com" />
                                            <span className="card-text">morgan.radic@parivedasolutions.com</span>
                                            <br />
                                            <br />
                                            <label className="fab fa-fly fa-fw text-muted fa-lg fa-2x listicon" data-toggle="tooltip" title="" data-original-title="Fun Fact" />
                                            <span className="card-text">I like beets by Jeremiah.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer" />
                        </div>
                    </div>
                </div>
                <div className="supreme">
                <div className="row sticky-top">
                    <div className="col-1">
                        <i id="myProfilebtn" data-toggle="modal" data-target="#myProfileModal" className="fas fa-user-alt fa-5x" />
                    </div>
                    <div className="col-4">
                        <h3>
                            {/* deleted onclick!!! */}
                            <span className="badge badge-pill badge-primary" >ID: 123456</span>
                        </h3>
                    </div>
                    <div className="col-6" />
                    <div className="col-1">
                        <i id="addbtn" data-toggle="modal" data-target="#addProfileModal" className="float-right fas fa-plus-circle fa-5x" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={dolphin} alt="Dolphin" className="displayed" />
                    </div>
                </div>
                <div className="container">
                    {/* <!-- contacts card --> */}
                    <div className="card card-default" id="card_contacts">
                        <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                            <ul className="list-group pull-down" id="contact-list">
                                <div id="table">
                                    <div>
                                        {data.map(x =>
                                            <ContactListItem name={x.name} cohort={x.cohort} market={x.market} phone={x.phone} email={x.email} fact={x.fact} key={x.name} />)}
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            

        );
    }
}

export default ContactList;
