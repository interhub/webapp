import React, { useEffect, useState } from "react";
import IdeasGroup from "../../components/IdeasGroup";
import { connect } from "react-redux";
import location from "../../varibles/location";


/*СТРАНИЦА ПОСЛЕДНИХ НОВОСТЕЙ КОМПОНЕНТ СО ССЫЛКАМИ СЛЕВА ВЗЯТ ИЗ ПРОФИЛЯ*/

function LNCenter() {

  let [groups, setGroups] = useState([])
  useEffect(() => {
    fetch(location + '/idea/get_top_groups')
    .then(res => res.json())
    .then(res => {
      console.log(res, 'res top groups Groups')
      if (res.result === true) {
        setGroups(res.groups)
      } else {

      }
    })
    .catch(e => {
      console.log(e, 'err get groups')
    })

  }, [])

  return (
    <div className="LNCenter">
      {groups.map(( el, i ) => {
        return <div onClick={() => {
          // alert('hi')
        }}>
          <IdeasGroup style={{margin: 15}} name={el.name} rating={el.rating}/>
        </div>
      })}
    </div>
  )

}


const mstp = ( state ) => {
  return {
    screen: state.screen,

  }
}
const mdtp = {}

const ConnectLNCenter = connect(mstp, mdtp)(LNCenter)


export default ConnectLNCenter;

