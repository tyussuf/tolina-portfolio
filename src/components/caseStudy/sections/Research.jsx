import Panel from '../../Panel.jsx'
import PullQuote from '../PullQuote.jsx'
import DonutChart from '../DonutChart.jsx'
import CaseStudyImage from '../CaseStudyImage.jsx'

export default function Research({ section, number }) {
  return (
    <Panel glass className="cs-section cs-research">
      <p className="cs-kicker">
        {number} &middot; {section.label}
      </p>

      <p className="cs-research__body">{section.body}</p>

      {section.quote && <PullQuote text={section.quote.text} attribution={section.quote.attribution} />}

      {section.insights && section.insights.length > 0 && (
        <div className="cs-image-row cs-image-row--three-across cs-research__insights">
          {section.insights.map((insight) => (
            <div key={insight.stat} className="cs-research__insight">
              {insight.chart ? (
                <DonutChart title={insight.chart.title} data={insight.chart.data} />
              ) : (
                <p className="cs-research__insight-stat">{insight.stat}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {section.affinityImage && (
        <CaseStudyImage
          src={section.affinityImage.src}
          alt={section.affinityImage.alt}
          caption={section.affinityImage.caption}
          variant="full-width"
        />
      )}

      {section.competitive && (
        <div className="cs-research__competitive">
          <p className="cs-research__competitive-body">{section.competitive.body}</p>
          <CaseStudyImage
            src={section.competitive.image.src}
            alt={section.competitive.image.alt}
            caption={section.competitive.image.caption}
            variant="half"
          />
        </div>
      )}
    </Panel>
  )
}
