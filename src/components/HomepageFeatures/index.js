import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'We are Local',
    Svg: require('@site/static/img/local.svg').default,
    description: (
      <>
        All our consultants are local to the Indianapolis area, ready to help
        you
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/productivity.svg').default,
    description: (
      <>
        Since you can expect the productivity of your business to be better
        knowing you IT needs are handled
      </>
    ),
  },
  {
    title: 'We are Quick to Respond',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Contact us and you'll likely to hear from us same day
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
