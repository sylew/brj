import React, { Component } from 'react'
import Choice from './Choice'
import Screen from './Screen'
import ChatbotHistory from './ChatbotHistory'
import $ from 'jquery'
import 'orgchart'
import OrgChart from 'react-orgchart'
import 'react-orgchart/index.css'



class SuePage extends Component {
    render() {
        
        
          
        window.$(document).ready(function() {
            window.$('.modal').modal();
        });
        const initechOrg = {
            name: "Sexual Harassment",
            actor: `(5)For the purposes of this Ordinance, a person (howsoever described) sexually harasses a woman if—
            (a)the person—
            (i)makes an unwelcome sexual advance, or an unwelcome request for sexual favours, to her; or
            (ii)engages in other unwelcome conduct of a sexual nature in relation to her,
            in circumstances in which a reasonable person, having regard to all the circumstances, would have anticipated that she would be offended, humiliated or intimidated; or
            (b)the person, alone or together with other persons, engages in conduct of a sexual nature which creates a hostile or intimidating environment for her.`,
            children: [
              {
                name: "File Lawsuit",
                actor: "Ron Livingston",
                children: [
                  {
                    name: "Sex Discrimination Ordinance s2(5)",
                    actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!",
                    children: [
                    {
                        name: "Initiate lawsuit on your own",
                        actor: `You can find the list of layer from the following link: https://www.gov.uk/government/publications/hong-kong-list-of-lawyers`,

                    },
                    {
                        name: "Enlist the help of the Equal Opportunities Commission",
                        actor: ""
                    }
                ]
                    
                }
                ]
              },
              {
                  name: "Lodge Complaint with Equal Opportunities Commision",
                  actor: "You can file your complaint here: http://www.eoc.org.hk/eoc/graphicsfolder/complaint.aspx",
                  children:[
                      {
                          name: "Investigation",
                          actor: "",
                          children: [
                              {
                                  name: "Conciliation",
                                  actor: `Conciliation initiated by the EOC:
                                  The purpose of conciliation is to bring the different parties together to look for ways to resolve the dispute.  Conciliation looks for common ground to help resolve the matter to the satisfaction of both parties so that both can move beyond the dispute.
                                  `,
                                  children: [
                                      {
                                          name: "Settlement",
                                          actor:""
                                      },
                                      {
                                          name: "Settlement Not Reached",
                                          actor: "",
                                          children: [
                                              {
                                                  name: "File Lawsuit",
                                                  actor: "",
                                                  children: [
                                                      {
                                                          name: "Initiate lawsuit on your own",
                                                          actor: "",
                                                          
                                                      },
                                                      {
                                                          name: "Enlist the help of the Equal Opportunities Commission",
                                                          actor: `
                                                          Legal Assistance from the EOC:
                                                          If conciliation is not successful, complainants can apply to the EOC for legal assistance.  All applications for assistance are considered by the Legal and Complaints Committee of the EOC.
                                                          `,
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
            ]
          };
          const initechOrg2 = {
            name: "Initiation of Civil Proceedings",
            actor: "Gary Cole",
            children: [
                {
                    name: "File Notice of Claim (Form 1)",
                    actor: "",
                    children: [
                        {
                            name: "Respondent replies with notice (Form 3)",
                            actor: "",
                            children: [
                                {
                                    name: "Commencement of Civil Proceedings",
                                    actor: "",
                                    children: [
                                        {
                                            name: "Court Order",
                                            actor: `Sex Discrimination Ordinance s76(3A): District Courts have the power to provide the following remedies:

                                            1.	Make a declaration that the respondent has engaged in conduct, or committed an act, that is unlawful under this Ordinance, and order that the respondent shall not repeat or continue such unlawful conduct or act;
                                            2.	Order that the respondent shall redress any loss or damage suffered by the claimant;
                                            3.	Order that the respondent shall employ or re-employ the claimant;
                                            4.	Order that the respondent shall promote the claimant;
                                            5.	Order that the respondent pay to the claimant damages by way of compensation for any loss or damage suffered by reason of the respondent’s conduct or act;
                                            6.	Order that the respondent shall pay to the claimant punitive (damages that punish the wrongdoer) or exemplary (injury to feelings) damages; or
                                            7.	Make an order declaring void in whole or part and either ab initio or from such date as may be specified in the order, any contract or agreement made in contravention of this Ordinance.
                                            `
                                        
                                        },
                                        {
                                            name: "ref: Case Law",
                                            actor: `Sex Discrimination Ordinance s76(3A): District Courts have the power to provide the following remedies:

                                            1.	Make a declaration that the respondent has engaged in conduct, or committed an act, that is unlawful under this Ordinance, and order that the respondent shall not repeat or continue such unlawful conduct or act;
                                            2.	Order that the respondent shall redress any loss or damage suffered by the claimant;
                                            3.	Order that the respondent shall employ or re-employ the claimant;
                                            4.	Order that the respondent shall promote the claimant;
                                            5.	Order that the respondent pay to the claimant damages by way of compensation for any loss or damage suffered by reason of the respondent’s conduct or act;
                                            6.	Order that the respondent shall pay to the claimant punitive (damages that punish the wrongdoer) or exemplary (injury to feelings) damages; or
                                            7.	Make an order declaring void in whole or part and either ab initio or from such date as may be specified in the order, any contract or agreement made in contravention of this Ordinance.
                                            `
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Possible Defendants",
                    actor:"",
                    children: [
                        {
                            name:"Perpetrator(s)",
                            actor:""
                        },
                        {
                            name: "Employer in Hong Kong",
                            actor: `Vicarious liability: “Sex Discrimination Ordinance deems an employer to be liable for the acts done by an employee in the course of his employment, whether or not the acts were done with the employer’s knowledge or approval.

                            Defence to vicarious liability:
                            Sex Discrimination Ordinance s46(3): It shall be a defence for the employer to prove that he took such steps as were reasonably practicable to prevent the employee from doing that act, or from doing in the course of his employment acts of that description.
                            `
                        }
                    ]

                }
                
             
            ]
          };
          var model = ()=>{
                     console.log
        window.$(document).ready(function() {
            window.$('.modal').modal();
        });
          }
          const MyNodeComponent = ({node}) => {
            return (
                    <div className="initechNode" onClick={() => alert(node.actor)}>{ node.name }</div>
                   
               );
          };
          const MyNodeComponent1 = ({node}) => {
            return (
                <div className="initechNode" onClick={() => alert(node.actor)}>{ node.name }</div>
            
               );
          };
      
          
        return (
            <div className="page">
                <div id="Choice" class="slideRight"><Choice /></div>
                <div id="Screen" class="slideDown">

                    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Find Lawyers</a>
                    <div id="modal1" class="modal">
                        <div class="modal-content">
                          
                            <a target="_blank" href="https://www.google.com/maps/search/solicitors+near+me/@22.2979923,114.1476368,14z/data=!3m1!4b1" ><img src="https://i.imgur.com/oxrs8Xo.png" /></a>
                        </div>
                        
                        <div class="modal-footer">
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                        </div>
                    </div>
                    <div className="App" id="initechOrgChart">
              <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="App" id="initechOrgChart1">
              <OrgChart tree={initechOrg2} NodeComponent={MyNodeComponent1} />
            </div>
 
                </div>
                <div id="ChatbotHistory" class="slideLeft"><ChatbotHistory /></div>
            </div>
        )
    }
}

export default SuePage