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
        <li>around 83% people are not happy with taxation</li>
        <li>around 74% people are in losses due to recent bear market</li>
        <li>
          75% of people have invested around 40k inr, 50% of people have
          invested around 83k and 25% people have invested around 115k, for the
          taken sample
        </li>
        <li>
          Around 86% of the people aren't happy with taxation rules on crypto
          especially during bear cycle (around 73% of people are in losses) with
          no option to set-off profits and losses. Due to taxation, around 35%
          of the people aren't trading crypto anymore.
        </li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Result