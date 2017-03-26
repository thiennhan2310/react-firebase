import React, {Component} from 'react';
import MesgsHeader from '../components/Mesgs/MesgsHeader'
import MesgsBoxSend from '../components/Mesgs/MesgsBoxSend'
import MesgsList from '../components/Mesgs/MesgsList'

class BoxMesgs extends Component {
    render() {
        return (
            <div className="primus-chat-system__box-right primus-chat-system__box-mesgs">
                <MesgsHeader/>
                <MesgsList/>
                <MesgsBoxSend/>
            </div>
        )
    }
}

export default BoxMesgs;