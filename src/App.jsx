// import Charts
import StackedBarChart from "./charts/StackedBarChart";
import LineChart from "./charts/LineChart";
import BubbleChart from "./charts/BubbleChart";
import LineChart_2 from "./charts/LineChart_2";
import ScatterChart from "./charts/ScatterChart";
import RadarChart from "./charts/RadarChart";

function App() {
  return (
    <div className="container mx-auto py-10 px-3">
      <h1 className="text-3xl font-bold mb-10">摯陞數位科技-面試作業</h1>
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-1">考題一</h2>
        <p className="mb-3">
          請依照提供的 JSON 檔案內的數據，來規劃出 3
          個不同的數據圖表，並說明每個圖表能展示的風險以及為什麼選擇這樣的規劃。
        </p>
        <ul className="flex flex-col gap-y-5">
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">
                1. 堆疊柱狀圖：每日銷售額按類別分布
              </h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>X軸：日期</li>
                    <li>Y軸：銷售額</li>
                    <li>
                      每個日期有兩個堆疊的柱子，分別代表電子產品和服裝的銷售額
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">潛在風險：</p>
                  <ul className="list-disc pl-5">
                    <li>可能掩蓋單位銷售量的變化</li>
                    <li>
                      如果兩個類別的價格差異很大，可能會誤導對銷售表現的判斷
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">洞察：</p>
                  <ul className="list-disc pl-5">
                    <li>直觀顯示每天的總銷售額</li>
                    <li>比較電子產品和服裝在每天銷售額中的佔比</li>
                  </ul>
                </li>
                <li>
                  <p>選擇理由：</p>
                  <p>
                    &nbsp;&nbsp;這個圖表能夠清晰地展示每日的銷售情況，並直接比較兩個類別的銷售額表現，有助於識別銷售趨勢和類別間的相對表現。
                  </p>
                </li>
              </ul>
            </div>
            <StackedBarChart className="w-full" />
          </li>
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <LineChart className="w-full" />
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">
                2. 折線圖：每日單位銷售量趨勢
              </h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>X軸：日期</li>
                    <li>Y軸：銷售單位數</li>
                    <li>兩條折線，分別代表電子產品和服裝的每日銷售單位數</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">潛在風險：</p>
                  <ul className="list-disc pl-5">
                    <li>不直接反映銷售額，可能忽視單價差異造成的影響</li>
                    <li>
                      如果兩個類別的銷售量差異很大，可能難以在同一個刻度上清晰顯示
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">洞察：</p>
                  <ul className="list-disc pl-5">
                    <li>顯示兩個類別的銷售量趨勢</li>
                    <li>識別銷售量的峰值和低谷</li>
                    <li>比較兩個類別的銷售量變化模式</li>
                  </ul>
                </li>
                <li>
                  <p>選擇理由：</p>
                  <p>
                    &nbsp;&nbsp;這個圖表能夠清楚地展示銷售量的變化趨勢，有助於預測庫存需求和識別可能的銷售模式。
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">
                3. 散點圖：單位銷售量與銷售額的關係
              </h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>X軸：單位銷售量</li>
                    <li>Y軸：銷售額</li>
                    <li>兩種不同顏色的點，分別代表電子產品和服裝</li>
                    <li>每個點代表一天的銷售數據</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">潛在風險：</p>
                  <ul className="list-disc pl-5">
                    <li>如果數據點重疊，可能難以區分個別數據</li>
                    <li>不直接顯示時間趨勢</li>
                  </ul>
                </li>
                <li>
                  <p className="mb-3">洞察：</p>
                  <ul className="list-disc pl-5">
                    <li>展示單位銷售量與銷售額之間的關係</li>
                    <li>識別每個類別的大致單價範圍</li>
                    <li>發現可能的異常值或定價變化</li>
                  </ul>
                </li>
                <li>
                  <p>選擇理由：</p>
                  <p>
                    &nbsp;&nbsp;這個圖表能夠揭示銷售量和銷售額之間的關係，有助於理解定價策略和識別可能的促銷或折扣活動。
                  </p>
                </li>
              </ul>
            </div>
            <BubbleChart className="w-full" />
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-1">考題二</h2>
        <p className="mb-3">
          假設您是一家船舶管理公司的UX/UI
          設計師，公司要求您分析船隊的運營效率並識別潛在的改進領域。
        </p>
        <ul className="flex flex-col gap-y-5">
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">船隻燃油效率折線圖</h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>X軸：月份（從 1 月到 6 月）。</li>
                    <li>
                      Y軸：燃油效率（平均每單位燃油消耗所行駛的距離），越高代表效率越好。
                    </li>
                    <li>數據點：每個數據點代表一個月。</li>
                  </ul>
                </li>
              </ul>
            </div>
            <LineChart_2 className="w-full" />
          </li>
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">貨物運輸效率</h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>X軸：貨物重量（cargoWeight）</li>
                    <li>Y軸：航行距離（distanceTravelled）</li>
                    <li>每個月份的數據將成為圖上的一個點</li>
                    <li>每個點的位置由該月的貨物重量和航行距離決定</li>
                  </ul>
                  <p className="my-3">這個圖表的優點：</p>
                  <ul className="list-disc pl-5">
                    <li>直觀顯示貨物重量與航行距離的關係</li>
                    <li>容易識別效率最高的月份（距離最遠且貨物最重的點）</li>
                    <li>可以看出是否存在線性關係或其他模式</li>
                  </ul>
                  <p className="my-3">解讀方法：</p>
                  <ul className="list-disc pl-5">
                    <li>
                      位於圖表右上角的點代表效率最高的月份（高重量，長距離）。
                    </li>
                    <li>
                      如果點呈現向右上方傾斜的趨勢，表示貨物重量增加時，航行距離也相應增加。
                    </li>
                    <li>偏離趨勢的點可能表示異常情況，值得進一步調查。</li>
                  </ul>
                </li>
              </ul>
            </div>
            <ScatterChart className="w-full" />
          </li>
          <li className="flex flex-wrap items-center justify-center gap-10 shadow-elevation-4 p-8 rounded-2xl bg-gray-50 lg:flex-nowrap">
            <div className="w-fll lg:w-2/3">
              <h3 className="text-xl font-bold mb-4">綜合性能分析圖</h3>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <p className="mb-3">圖表描述：</p>
                  <ul className="list-disc pl-5">
                    <li>使用雷達圖呈現綜合性能分析</li>
                    <li>
                      將每個月的數據標準化到 0-1 範圍，以便在同一尺度上比較。
                    </li>
                    <li>
                      燃油效率使用反向比例（1減去標準化值），因為燃油消耗越低越好。
                    </li>
                    <li>在圖表中顯示燃油效率、航行距離和貨物重量三個維度。</li>
                    <li>為每個月份（即每條雷達線）隨機生成不同的顏色。</li>
                  </ul>
                  <p className="my-3">這個雷達圖的優點：</p>
                  <ul className="list-disc pl-5">
                    <li>可以同時比較多個維度的數據。</li>
                    <li>直觀地展示每個月在不同指標上的表現。</li>
                    <li>易於識別哪些月份在某些方面表現突出。</li>
                  </ul>
                  <p className="my-3">解讀方法：</p>
                  <ul className="list-disc pl-5">
                    <li>圖形面積越大，表示該月份的綜合性能越好。</li>
                    <li>在某一軸上延伸得越遠，表示在該指標上表現越好。</li>
                  </ul>
                </li>
              </ul>
            </div>
            <RadarChart className="w-full" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
