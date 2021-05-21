import React from 'react'

import faq from '../../Content/faq';

class Faq extends React.Component {
    render() {
        return(
            <main id="main">
                <section class="about" id="myth">
                    <div className="container">
                    <div className="section-title">
                        <h2>{faq.main.heading}</h2>
                        <p>{faq.main.content}</p>
                    </div>
                    <div className="section-title content">
                    <div className="accordion" id="accordionExample">
                        {faq.faqs.map(item=>(
                            <div class="accordion-item">
                            <h1 class="accordion-header" id={"flush-heading"+item.id}>
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+item.id} aria-expanded="false" aria-controls={"flush-collapse"+item.id}>
                                {item.question}
                              </button>
                            </h1>
                            <div id={"flush-collapse"+item.id} class="accordion-collapse collapse" aria-labelledby={"flush-heading"+item.id}data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">
                                  {item.answer}
                            </div>
                          </div>
                          </div>
                        ))}   
                    </div>
                    </div>
                    </div>
                </section>
            </main>
            );
        }
        
    }
    
    export default Faq;