import React from 'react'
import '../styles/home.css'
import data_description from '../images/data_description.png'
import data_info from '../images/data_info.png'
import appName_value_counts from '../images/appName_value_counts.png'
import language_value_counts from '../images/language_value_counts.png'
import platform_language from '../images/platform_language.png'
import vendor_value_counts from '../images/vendor_value_counts.png'
import future_trading_counts from '../images/future_trading_counts.png'
import happy_taxation_counts from '../images/happy_taxation_counts.png'
import taxation_and_future_counts from '../images/taxation_and_future_counts.png'
import returns_range from '../images/returns_range.png'
import distribution_on_investments from '../images/distribution_on_investments.png'
import investments_range_counts from '../images/investments_range_counts.png'
import investments_vs_roi from '../images/investments_vs_roi.png'
import pairplot from '../images/pairplot.png'
import heatmap_1 from '../images/heatmap_1.png'
import heatmap_2 from '../images/heatmap_2.png'
import cluster_1 from '../images/cluster_1.png'
import cluster_2 from '../images/cluster_2.png'



const Result = () => {
  return (
<div className="container">
  <div className="section results-container">
    <div className="title">Survey Results</div>
    <div className="result">
      <div className="desc">Data description</div>
      <div className="img">
        <img src={data_description} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">Data info</div>
      <div className="img">
        <img src={data_info} alt="" />
      </div>
    </div>
    <div className="heading">Value Counts</div>
    <div className="result">
      <div className="desc">AppName value counts</div>
      <div className="img">
        <img src={appName_value_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">language value counts</div>
      <div className="img">
        <img src={language_value_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">platform value counts</div>
      <div className="img">
        <img src={platform_language} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">vendor value counts</div>
      <div className="img">
        <img src={vendor_value_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">future(trading after taxation) value counts</div>
      <div className="img">
        <img src={future_trading_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">happy with taxation value counts</div>
      <div className="img">
        <img src={happy_taxation_counts} alt="" />
      </div>
    </div>
    <div className="heading">Explanatory data Analysis</div>
    <div className="result">
      <div className="desc">People's trading decision after taxation</div>
      <div className="img">
        <img src={taxation_and_future_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">
        Distubtion of return on investments based on total investment
      </div>
      <div className="img">
        <img src={distribution_on_investments} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">Range of data investments</div>
      <div className="img">
        <img src={investments_range_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">Range of return on investments</div>
      <div className="img">
        <img src={returns_range} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">User's Platform based on their device Language</div>
      <div className="img">
        <img src={platform_language} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">
        Investments and returns of people based on their reaction to taxation
      </div>
      <div className="img">
        <img src={investments_vs_roi} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">happy with taxation value counts</div>
      <div className="img">
        <img src={happy_taxation_counts} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">Disturibution of returns on investment</div>
      <div className="img">
        <img src={distribution_on_investments} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="desc">Pairplot</div>
      <div className="img special">
        <img src={pairplot} alt="" />
      </div>
    </div>
    <div className="heading">Heatmaps</div>
    <div className="result">
      <div className="img">
        <img src={heatmap_1} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="img">
        <img src={heatmap_2} alt="" />
      </div>
    </div>
    <div className="heading">ClusterMaps</div>
    <div className="result">
      <div className="img special">
        <img src={cluster_1} alt="" />
      </div>
    </div>
    <div className="result">
      <div className="img special">
        <img src={cluster_2} alt="" />
      </div>
    </div>
    <div className="heading">Conclusion</div>
    <div className="result">
      <ul>
        <li>There were around 4351 clicks to our ad campaign</li>
        <li>246 submissions were found to be valid after filtering the entires</li>
        <li>84.55% people found out not to be happy with taxation and 15.44% are to found out to be happy with the taxations.</li>
        <li>around 71.95% people are in losses due to recent bear market</li>
        <li>Out of all the entries only 6.91% of people found out to be in profits more than 50% of their investment. 4.47% of people are found to be in the profit range of 30-50% and around 15.83% of people are in profits range of 0-30% </li>
        <li>
          25.6% of people have invested around 0-40k INR, 50.8% of people have
          invested around 0-78k INR and 75% people have invested around 0-115k INR, for the
          sample taken.
        </li>
        <li>
          Around 84.55% of the people aren't happy with taxation rules on crypto
          especially during bear cycle (around 71.95% of people are in losses) with
          no option to set-off profits and losses. Around 40.24%
          of the people aren't trading crypto anymore or atleast for the timebeing.
        </li>
      </ul>
    </div>
    <div className='note'>
      <p className='heading'>Please Note: </p>
      <div className='notes'>
        <ul>
          <li>The chances of data to be biased is possible based on their personal interest.</li>
          <li>We don't intend anything to cause any type of riots.</li>
          <li>We don't intend to create/spread any type of hate/terrorism.</li>
          <li>Our main goal was to analyze the market's fear and what the future of cryptocurrencies looks like during the time of analysis of the survey.</li>
        </ul> 
      </div>
    </div>
  </div>
</div>
  )
}

export default Result