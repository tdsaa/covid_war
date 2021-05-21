import React from 'react'

class Twitter extends React.Component {
    render() {
        return(
            <main id="main">
            <section class="about" id="myth">
            <div class="container">
            
            <div class="section-title">
            <h2>Twitter Updates</h2>
            <p></p>
            </div>
            <div class="row">
            <div class="col-lg-3" data-aos="fade-left" data-aos-delay="100">
            <a class="twitter-timeline" href="https://twitter.com/MoHFW_INDIA?ref_src=twsrc%5Etfw"  data-tweet-limit="5">Tweets by MoHFW_INDIA</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div class="col-lg-3" data-aos="fade-left" data-aos-delay="200">
            <a class="twitter-timeline" href="https://twitter.com/WHO?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by WHO</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div class="col-lg-3" data-aos="fade-left" data-aos-delay="300">
            <a class="twitter-timeline" href="https://twitter.com/COVIDNewsByMIB?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by COVIDNewsByMIB</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            <div class="col-lg-3" data-aos="fade-left" data-aos-delay="400">
            <a class="twitter-timeline" href="https://twitter.com/ICMRDELHI?ref_src=twsrc%5Etfw" data-tweet-limit="5">Tweets by ICMRDELHI</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
            </div>
            
            </div>
            </section>
            </main>
            );
        }
        
    }
    
    export default Twitter;