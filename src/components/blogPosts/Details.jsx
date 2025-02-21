import React from "react";
import { Col, Divider, Flex, Row } from "antd";
import verifiedBy from "../../assets/images/blogs/posts/verifiedBy.png";
import verifiedBy2 from "../../assets/images/blogs/posts/verifiedBy2.png";
import commentIcon from "../../assets/images/blogs/posts/message.png";
import cardImg from "../../assets/images/blogs/posts/card.png";
import health from "../../assets/images/blogs/posts/health.png";
import health2 from "../../assets/images/blogs/posts/depressed.png";
import therapy from "../../assets/images/blogs/posts/therapy.png";

const Details = () => {
  return (
    <div className="bg-white">
      <Row className="pt-10 pb-10" gutter={16}>
        <Col xs={24} md={24} lg={6}></Col>
        <Col xs={24} md={24} lg={10}>
          <p className="font-Roboto px-4 text-base lg:text-lg">
            Who will tell the world about those silent battles, the hours of
            depression and anxiety when you were suffering alone, crying into a
            pillow lying on the bed? You are exhausted, constantly drained, and
            worn out. While the world sees only the physical changes like weight
            gain, acne, and facial hair on the outside, nobody knows how you are
            struggling on the inside. Though on the verge of giving up, you
            remain resilient, not letting the weight of your struggles overpower
            you. We see you, girl. As polycystic ovarian syndrome is a hormonal
            disorder affecting every 1 out of 10 women globally, the continuous
            cycle of hormonal imbalances, weight fluctuations, acne, and facial
            hair can have a great toll on the emotional and mental well-being of
            any woman. Approximately 8 to 13% of the reproductive-age women are
            suffering from this condition. The effect of PCOS on mental health
            is something that often remains unaddressed. Dealing with PCOS
            emotionally is a never-ending battle. It's like a storm brewing
            inside your head while you suffer silently. We truly acknowledge
            these struggles and that's why we are here to explore the
            relationship between PCOS and mental health to help you overcome
            these challenges. But before talking about its effects on mental
            health, you can check our article on PCOS
            <a href="#">
              {" "}
              https://blog.revaiv.app/understanding-pcos-what-every-woman-needs-to-know/{" "}
            </a>
            for a better understanding of this condition.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6  px-4 text-2xl lg:text-4xl font-bold">
            How PCOS And Mental Health Are Related?
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            PCOS comes with various symptoms like weight gain, irregular
            periods, hormonal imbalance, insulin resistance, hirsutism, acne,
            and infertility. All these symptoms negatively impact your mental
            health. A study conducted on women's health in Australia suggested
            that the rate of depression and anxiety in women with PCOS is
            greater as compared to those without this condition. Another study
            supervised by Columbia University suggests that PCOS can be
            responsible for psychiatric problems. The hormonal imbalance
            disrupts the neurotransmitters causing depressive symptoms. The
            reduced serotonin and elevated cortisol levels are the main reasons
            behind stress, the most common yet overlooked concern in these
            patients. In addition, the higher androgen levels result in
            hirsutism and infertility. The thoughts of becoming unattractive and
            the fear of not being able to conceive heavily contribute to
            depression and anxiety. The patients often report that they feel
            themselves being trapped in a relentless cycle of frustration and
            self-doubt. Moreover, the incidence of sleep disorders like sleep
            apnea and insomnia also increases in this condition which
            exacerbates the anxiety and stress symptoms making it even more
            challenging to cope with all that mental turmoil.
          </p>
          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-2xl lg:text-4xl font-bold">
            Effects Of PCOS On Mental Health
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            Having uncovered the link between PCOS and mental health, let's
            highlight the major effects and challenges that this condition
            imposes on your emotional well-being.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Depression And Anxiety
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            As discussed earlier, the hormonal imbalance associated with Pcos
            contributes to the symptoms of depression and anxiety. The constant
            feelings of sadness and hopelessness that come with infertility, and
            weight gain drains one emotionally. In many people, the heightened
            stress and anxiety lead to suicidal thoughts. A study shows that the
            incidence of suicide attempts was 40% greater in women with PCOS as
            compared to those without this condition. Unfortunately in our
            society issues like these are not addressed until we lose someone
            close to us.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Body Image And Social Isolation
          </h1>
          <img src={health} alt="health" className="px-4"/>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            There is a alot of societal pressure to look in a certain way
            especially when it comes to women. Society has set such unrealistic
            standards of beauty and glamor that women with PCOS feel
            intimidated. The lack of awareness of this condition in society
            makes them think they are the only ones suffering from this
            condition. Moreover, symptoms like weight gain and hirsutism results
            in reduced self-esteem and confidence. All these factors push them
            to withdraw from social activities and avoid interactions.
          </p>
          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Sleep Disorders
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            In addition to depression and anxiety, women with PCOS also
            experience sleep disorders like sleep apnea and insomnia. Sleep
            apnea is a disorder in which individuals feel obstructed breathing
            during sleep. There is some evidence that suggests a strong
            relationship between sleep apnea and metabolic disruptions such as
            in PCOS. A study shows that the risk of obstructive sleep apnea is 5
            to 10 folds higher in women with Pcos. Moreover, the disrupted
            melatonin harmony in PCOS contributes to disturbed sleep patterns
            causing insomnia. When you do not sleep properly, ultimately you’ll
            feel fatigued and exhausted the next day.
          </p>
          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Eating Disorders
          </h1>
          <img src={health2} alt="health2" className="px-4"/>

          <p className="font-Roboto  px-4 text-base lg:text-lg">
            It is not surprising that Pcos has also an association with an
            increased incidence of eating disorders. The women with pcos have
            mostly strange eating patterns. Some women restrict their diets
            while others may fall prey to binge eating. Research has shown that
            there are 4 times more chances of eating disorders in women with
            PCOS. While the exact cause is still unknown, it may be due to
            hormonal imbalance and body image concerns that lead to severely
            restricted eating. In addition, the higher insulin level in pcos
            results in low blood glucose levels inducing hypoglycemia leading to
            more binge eating episodes in some women.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-2xl lg:text-4xl font-bold">
            How To Cope With Mental Health Challenges With PCOS?
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            We know that you have had enough of dealing with all this but trust
            us, all these conditions can be managed. Coping with mental health
            challenges requires a holistic approach to address both emotional
            and physical well-being. We are providing some effective ways below
            to ease your emotional miseries so that you can thrive better and
            get back your enjoyment in life.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Lifestyle Modifications
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            Small lifestyle changes like eating healthy and exercising regularly
            can significantly aid you in this regard. Take a balanced diet from
            diverse food groups full of nutrients and energy to help manage the
            hormonal imbalance. Research has shown that people who exercise at
            least 150 minutes a week have fewer signs of depression and anxiety.
            Only restricting your calories can be of no help if you aren’t
            working out. In fact, reducing your food intake too much can deprive
            you of essential nutrients which can cause you to feel drained and
            fatigued.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Meditation and Stress Management
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            Practicing mindful activities like meditation,  breathing exercises,
            and yoga poses can help you relax your body and relieve stress.
            Identify your potential stress triggers and try to manage them with
            these stress-busting practices. Spend some time in nature and engage
            in your favorite hobbies. Try yoga for 15 to 20 minutes daily and
            thank us later.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
            Therapy and Support
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
            The negative thought patterns and behaviors develop over time and
            don’t go away in the blink of an eye. Seeking support in the form of
            behavioral therapies can help to address those concerns. Moreover,
            connecting with some loved one or friend who understands you, can
            help you push away those lonely thoughts and feelings of isolation.
            Join some support groups and communicate with others dealing with
            the same problems for emotional support.
          </p>
          <img src={therapy} alt="therapy" className="px-4"/>
          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-lg lg:text-xl font-bold">
          Self Compassion
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
          Listen to your body, embrace it, and don’t be hard on yourself. You’ve already endured alot and how you’ve dealt with all of that turmoil is truly commendable. A positive and self-supportive mindset can help lower your stress levels and promote self-acceptance. This healthy outlook will nourish your emotional well-being and help you flourish vibrantly.
While dealing with pcos emotionally might feel like you are stranded in a dark tunnel, remember there's always light at the end. You are beautiful and don’t let all that struggle dull your sparkle. Even if it feels like nobody understands you, know that we see you. Despite your hardships, you continue to bloom every day. This never-giving-up spirit is what keeps you holding on to hope. You aren’t alone, and your journey keeps inspiring us all.
          </p>

          <h1 className="text-[#296969] font-Roboto  mt-6 px-4 text-2xl lg:text-4xl font-bold">
          How can RevAiv Help You?
          </h1>
          <p className="font-Roboto  px-4 text-base lg:text-lg">
          RevAiv is an all-in-one health application that offers a holistic approach to managing your pcos symptoms. Our expert-designed diet plans and AI fitness trainer plans help manage your chronic health condition while uplifting your overall well-being. By keeping track of your lifestyle progress, RevAiv provides valuable insights into your potential triggers, empowering you to take charge of your health more effectively.  So, what’s the delay?  Book a call with us or sign up today to nurture your mental and overall well-being.
          </p>
        </Col>
        <Col xs={24} md={24} lg={8}>
          <Divider style={{ borderColor: "#000000" }} />

          <h3 className="font-Roboto px-4 text-xl font-medium">
            Written by Saira Bashir
          </h3>
          <p className="font-Roboto px-4 text-base font-light">
            Bachelors in human nutrition and dietetics
          </p>

          <img src={verifiedBy} alt="verifiedBy" className="mt-6 h-20 px-4" />
          <img src={verifiedBy2} alt="verifiedBy2" className="mt-6 h-24 px-4" />

          <Flex align="center" className="mt-6 px-4" gap="5px">
            <img src={commentIcon} alt="commentIcon" />
            <p className="text-[#606060]">0 Comments</p>
          </Flex>

          <h3 className="font-Roboto text-lg font-normal mt-6 px-4">Tags</h3>
          <p className="text-[#606060] px-4">
            PCOS | Holistic Health | Mental Health
          </p>

          <h3 className="font-Roboto text-lg font-normal mt-6 px-4">Share</h3>
          <div className="flex md:justify-start gap-4 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 36 37"
              fill="none"
            >
              <path
                d="M30.7096 33.7085C22.4747 33.7085 14.2338 33.7085 5.99888 33.7085C5.59703 33.6005 5.19518 33.4926 4.82932 33.2767C3.82169 32.7009 3.24591 31.8252 3 30.7096C3 22.4747 3 14.2338 3 5.99888C3.10796 5.59703 3.22192 5.19518 3.43184 4.82932C4.00762 3.82169 4.88329 3.24591 5.99888 3C14.2338 3 22.4747 3 30.7096 3C31.1115 3.10796 31.5133 3.21592 31.8792 3.43184C32.8808 4.00762 33.4626 4.88329 33.7085 5.99888C33.7085 14.2338 33.7085 22.4747 33.7085 30.7096C33.6005 31.1115 33.4866 31.5133 33.2767 31.8792C32.7009 32.8868 31.8252 33.4626 30.7096 33.7085ZM5.42309 18.3243C5.42309 22.1628 5.42309 26.0014 5.42309 29.84C5.42309 30.8236 5.87892 31.2854 6.84456 31.2854C10.941 31.2854 15.0435 31.2854 19.14 31.2854C19.5238 31.2854 19.5298 31.2794 19.5298 30.9016C19.5298 27.9147 19.5298 24.9218 19.5358 21.9349C19.5358 21.647 19.4518 21.5451 19.158 21.5511C18.2103 21.569 17.2567 21.5451 16.309 21.5631C15.9971 21.569 15.9192 21.4611 15.9252 21.1672C15.9432 20.1656 15.9432 19.1699 15.9252 18.1683C15.9192 17.8564 16.0331 17.7785 16.321 17.7845C17.2507 17.8025 18.1803 17.7905 19.11 17.7905C19.5298 17.7905 19.5178 17.7905 19.5298 17.3706C19.5538 16.363 19.4578 15.3494 19.5958 14.3478C19.8957 12.0686 21.9289 10.0474 24.2021 9.75347C25.2397 9.62152 26.2773 9.71748 27.3149 9.69349C27.5608 9.6875 27.5488 9.84944 27.5488 10.0174C27.5488 11.055 27.5428 12.0986 27.5548 13.1362C27.5548 13.3821 27.4708 13.4661 27.2249 13.4601C26.5652 13.4481 25.9054 13.4481 25.2457 13.4601C24.0221 13.4721 23.3084 14.1798 23.2964 15.4034C23.2904 16.0751 23.3084 16.7409 23.2904 17.4126C23.2844 17.7005 23.3744 17.7965 23.6683 17.7965C24.8798 17.7845 26.0854 17.7965 27.2969 17.7905C27.5548 17.7905 27.6268 17.8684 27.5788 18.1263C27.3989 19.146 27.2309 20.1716 27.075 21.1972C27.033 21.4671 26.931 21.5631 26.6491 21.5631C25.6415 21.5511 24.6279 21.563 23.6203 21.5511C23.3744 21.5511 23.2904 21.641 23.2904 21.8869C23.2964 24.9038 23.2964 27.9267 23.2904 30.9435C23.2904 31.2014 23.3744 31.2974 23.6383 31.2914C24.6579 31.2794 25.6775 31.2854 26.6971 31.2854C27.7767 31.2854 28.8563 31.2914 29.9359 31.2854C30.7996 31.2794 31.2674 30.8056 31.2854 29.9479C31.2854 29.8759 31.2854 29.81 31.2854 29.738C31.2854 22.1508 31.2854 14.5637 31.2854 6.97651C31.2854 6.87455 31.2914 6.77859 31.2854 6.67662C31.2434 5.90891 30.7996 5.46508 30.0259 5.42309C29.9539 5.4171 29.8879 5.42309 29.816 5.42309C22.1688 5.42309 14.5217 5.42309 6.87455 5.42309C6.7366 5.42309 6.59265 5.42909 6.45471 5.45308C5.86693 5.55504 5.55504 5.86693 5.45308 6.44871C5.42309 6.61665 5.4171 6.78458 5.4171 6.95252C5.42309 10.7491 5.42309 14.5337 5.42309 18.3243Z"
                fill="#27696D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 35 37"
              fill="none"
            >
              <path
                d="M23.8722 33.7085C20.2315 33.7085 16.5969 33.7085 12.9563 33.7085C12.8363 33.6965 12.7224 33.6725 12.6024 33.6725C11.7447 33.6605 10.887 33.5885 10.0414 33.4266C7.73823 32.9828 5.86693 31.8672 4.56541 29.8819C3.5398 28.3105 3.19793 26.5412 3.10196 24.6999C3.006 22.8766 3.04198 21.0472 3.02999 19.2179C3.02999 19.05 3.012 18.8821 3 18.7141C3 18.4742 3 18.2343 3 17.9944C3.012 17.8145 3.02999 17.6345 3.02999 17.4606C3.04798 15.2234 2.96401 12.9863 3.22192 10.7611C3.40785 9.18368 3.89367 7.70224 4.8593 6.41272C6.50269 4.23554 8.77584 3.31788 11.4089 3.10196C11.9247 3.05998 12.4405 3.03599 12.9563 3C16.5729 3 20.1956 3 23.8122 3C23.9322 3.012 24.0461 3.03599 24.1661 3.03599C25.0357 3.04798 25.9054 3.11396 26.7571 3.28189C30.1398 3.96564 32.371 5.92091 33.3186 9.27365C33.5346 10.0474 33.6185 10.8391 33.7085 11.6308C33.7085 16.0511 33.7085 20.4655 33.7085 24.8858C33.6365 25.4676 33.6005 26.0554 33.4866 26.6372C33.1207 28.5684 32.287 30.2418 30.7756 31.5433C29.2282 32.8808 27.3869 33.4446 25.3896 33.6005C24.8858 33.6485 24.382 33.6725 23.8722 33.7085ZM18.4082 30.9195C20.1956 30.9495 21.9889 30.8896 23.7762 30.8536C24.6219 30.8356 25.4736 30.7996 26.3073 30.6257C28.5264 30.1638 29.9839 28.8863 30.5837 26.6671C30.8656 25.6235 30.9016 24.5499 30.9135 23.4883C30.9495 20.9813 30.9495 18.4682 30.9435 15.9611C30.9375 14.2638 30.9735 12.5604 30.7516 10.8751C30.4097 8.30801 28.8743 6.65263 26.3433 6.11883C25.1617 5.86693 23.9562 5.86693 22.7626 5.85493C19.8717 5.82494 16.9868 5.82494 14.0958 5.85493C12.9623 5.86693 11.8167 5.89092 10.6891 6.07685C8.29602 6.4787 6.71861 7.97214 6.18481 10.3353C5.9449 11.3969 5.92091 12.4765 5.90891 13.556C5.87892 16.7648 5.88492 19.9736 5.90891 23.1824C5.91491 24.1901 5.9449 25.1977 6.14282 26.1933C6.58666 28.4545 7.87018 29.9419 10.1313 30.5417C11.097 30.7996 12.0866 30.8416 13.0762 30.8596C14.8516 30.8956 16.6269 30.9495 18.4082 30.9195Z"
                fill="#27696D"
              />
              <path
                d="M18.3903 26.2891C14.0359 26.2831 10.4792 22.7025 10.4792 18.3421C10.4852 13.9937 14.0599 10.4191 18.4143 10.4251C22.7806 10.4311 26.3553 14.0237 26.3373 18.3841C26.3253 22.7384 22.7507 26.2951 18.3903 26.2891ZM18.4023 23.4342C21.2092 23.4342 23.4884 21.173 23.4944 18.3721C23.5004 15.5651 21.2272 13.28 18.4383 13.274C15.6133 13.268 13.3402 15.5351 13.3402 18.3541C13.3342 21.161 15.5953 23.4342 18.4023 23.4342Z"
                fill="#27696D"
              />
              <path
                d="M26.6011 12.0207C25.5575 12.0207 24.7478 11.205 24.7478 10.1554C24.7478 9.12378 25.5755 8.28409 26.6071 8.2721C27.6147 8.2601 28.4844 9.12977 28.4964 10.1434C28.5024 11.175 27.6507 12.0207 26.6011 12.0207Z"
                fill="#27696D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 35 37"
              fill="none"
            >
              <path
                d="M30.7096 33.7085C22.4747 33.7085 14.2338 33.7085 5.99888 33.7085C5.57304 33.5945 5.15919 33.4746 4.77534 33.2467C3.8037 32.6709 3.23991 31.8012 3 30.7096C3 22.4747 3 14.2338 3 5.99888C3.10796 5.58503 3.22791 5.17719 3.44383 4.79933C4.01962 3.8097 4.89529 3.24591 5.99888 3C14.2338 3 22.4747 3 30.7096 3C31.1055 3.10796 31.4953 3.20992 31.8552 3.41385C32.8748 3.98963 33.4566 4.8713 33.7085 5.99888C33.7085 14.2338 33.7085 22.4747 33.7085 30.7096C33.6005 31.1115 33.4866 31.5133 33.2767 31.8792C32.7009 32.8868 31.8252 33.4626 30.7096 33.7085ZM18.3842 5.42309C14.5577 5.42309 10.7311 5.42309 6.89854 5.42309C5.86093 5.42309 5.4171 5.86093 5.4171 6.89854C5.4171 14.5337 5.4171 22.1688 5.4171 29.804C5.4171 30.8416 5.85493 31.2854 6.89254 31.2854C14.5277 31.2854 22.1628 31.2854 29.798 31.2854C30.8356 31.2854 31.2794 30.8416 31.2794 29.81C31.2794 22.1748 31.2794 14.5397 31.2794 6.90454C31.2794 5.86693 30.8416 5.42309 29.804 5.42309C26.0014 5.42309 22.1928 5.42309 18.3842 5.42309Z"
                fill="#27696D"
              />
              <path
                d="M19.3379 16.507C19.5898 16.1771 19.7877 15.9192 20.0337 15.6973C20.8074 15.0076 21.731 14.6477 22.7506 14.5637C23.4704 14.5037 24.1901 14.5397 24.8978 14.6897C26.7151 15.0855 27.6988 16.2671 28.0886 18.0244C28.2446 18.7502 28.3345 19.4819 28.3345 20.2256C28.3405 22.8166 28.3345 25.4017 28.3345 27.9927C28.3345 28.3825 28.3345 28.3885 27.9327 28.3885C26.8051 28.3885 25.6715 28.3885 24.544 28.3885C24.1541 28.3885 24.1541 28.3885 24.1541 27.9807C24.1541 25.9295 24.1601 23.8842 24.1481 21.833C24.1481 21.1852 24.1361 20.5315 23.9922 19.8957C23.7343 18.7921 23.1825 18.2643 22.1149 18.2044C21.0293 18.1444 20.1536 18.5102 19.7038 19.5539C19.4039 20.2376 19.3559 20.9693 19.3499 21.701C19.3379 23.7883 19.3439 25.8815 19.3439 27.9687C19.3439 28.3885 19.3439 28.3885 18.9361 28.3885C17.8145 28.3885 16.6989 28.3825 15.5773 28.3945C15.3074 28.3945 15.2115 28.3166 15.2115 28.0407C15.2175 23.7403 15.2175 19.4459 15.2115 15.1455C15.2115 14.8756 15.2954 14.7796 15.5713 14.7856C16.7109 14.7976 17.8505 14.7976 18.99 14.7856C19.2659 14.7796 19.3559 14.8756 19.3499 15.1455C19.3259 15.5713 19.3379 15.9972 19.3379 16.507Z"
                fill="#27696D"
              />
              <path
                d="M8.37401 21.5631C8.37401 19.4459 8.37401 17.3287 8.37401 15.2055C8.37401 14.7916 8.37401 14.7916 8.78785 14.7916C9.94542 14.7916 11.109 14.7976 12.2666 14.7856C12.5424 14.7856 12.6264 14.8756 12.6264 15.1455C12.6204 19.4399 12.6204 23.7403 12.6264 28.0347C12.6264 28.3046 12.5424 28.3945 12.2666 28.3945C11.085 28.3826 9.90943 28.3826 8.72788 28.3945C8.45198 28.3945 8.36801 28.3046 8.36801 28.0347C8.38001 25.8815 8.37401 23.7223 8.37401 21.5631Z"
                fill="#27696D"
              />
              <path
                d="M10.5571 8.01416C11.9546 8.01416 13.0401 9.10575 13.0401 10.5032C13.0401 11.8947 11.9426 12.9803 10.5391 12.9743C9.1656 12.9743 8.07401 11.8767 8.07401 10.4972C8.07401 9.10575 9.1596 8.01416 10.5571 8.01416Z"
                fill="#27696D"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 36 37"
              fill="none"
            >
              <path
                d="M5.75897 33.7085C4.84131 33.7085 3.91766 33.7085 3 33.7085C3.05398 33.6365 3.10796 33.5646 3.16794 33.4986C6.91653 29.1442 10.6591 24.7898 14.4077 20.4355C14.7196 20.0756 14.7196 20.0756 14.4497 19.6798C11.8287 15.8652 9.20768 12.0566 6.59266 8.24204C5.3931 6.49669 4.19355 4.74535 3 3C6.01687 3 9.03974 3 12.0566 3C12.1226 3.11396 12.1826 3.22791 12.2545 3.33587C14.6776 6.86855 17.1067 10.4012 19.5358 13.9339C19.7397 14.2278 19.7457 14.2278 19.9796 13.9579C21.2932 12.4285 22.6127 10.899 23.9262 9.36962C25.7495 7.24641 27.5668 5.12321 29.3901 3C30.2898 3 31.1894 3 32.0891 3C32.0591 3.14395 31.9452 3.23391 31.8552 3.34187C28.3045 7.47433 24.7539 11.6008 21.1912 15.7272C21.0053 15.9432 20.9993 16.0811 21.1552 16.315C24.1781 20.6994 27.1949 25.0897 30.2118 29.4801C31.1775 30.8896 32.1431 32.299 33.1087 33.7085C30.0919 33.7085 27.069 33.7085 24.0521 33.7085C23.9682 33.5706 23.8962 33.4326 23.8062 33.3007C21.2512 29.5761 18.6901 25.8514 16.1291 22.1268C15.9312 21.8449 15.9312 21.8449 15.7092 22.1028C13.0402 25.2097 10.3652 28.3105 7.69624 31.4234C7.04249 32.1791 6.40672 32.9468 5.75897 33.7085ZM27.3329 31.7712C27.8847 31.7712 28.4305 31.7712 28.9823 31.7712C29.0842 31.7712 29.2342 31.8312 29.2822 31.7172C29.3301 31.6093 29.2042 31.5253 29.1442 31.4354C25.4856 26.1993 21.827 20.9693 18.1683 15.7392C15.7392 12.2665 13.3101 8.79383 10.887 5.32113C10.7551 5.1292 10.6052 5.03924 10.3712 5.04523C9.78346 5.05723 9.18968 5.05123 8.6019 5.05123C8.09209 5.05123 7.58228 5.05123 7.07248 5.05123C6.98851 5.05123 6.86855 5.01525 6.82057 5.09921C6.75459 5.20717 6.88655 5.27315 6.92253 5.35712C6.94052 5.3931 6.97051 5.42309 6.98851 5.45308C11.073 11.2889 15.1515 17.1307 19.2359 22.9665C21.2092 25.7915 23.1884 28.6164 25.1557 31.4473C25.3236 31.6873 25.5036 31.7892 25.7975 31.7772C26.3133 31.7532 26.8231 31.7712 27.3329 31.7712Z"
                fill="#27696D"
              />
            </svg>
          </div>

          <img src={cardImg} alt="cardImg" className="mt-6 h-96 px-4" />
        </Col>
      </Row>
    </div>
  );
};

export default Details;
