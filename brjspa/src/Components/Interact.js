import React, { Component } from 'react'

class Interact extends Component {
    render(){
        const { userData } = this.props;
        const interact = userData.map(data => {
          return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" defaultValue="Felix Wong"/>
                </label>
                <label>
                    Where this happened:
                    <input type="text" name="name" defaultValue="Thailand"/>
                </label>
                <label>
                    Type of incident:
                    <input type="text" name="name" defaultValue={data.type}/>
                </label>
                <label>
                    Initial Recount:
                    <input type="text" name="name" defaultValue={data.initialRecount}/>
                </label>
                <label>
                    Remarks:
                    <input type="text" name="name" defaultValue="Please enter remark"/>
                </label>
                <input type="button" value="confirm" />
            </form>
          )
        });
        return (
          <div className="interact">
            { interact }
          </div>
        )
      }
}

export default Interact