import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Thermometer, Wind, ArrowRight } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  icon: React.ReactNode
  options: {
    label: string
    value: string
  }[]
}

const questions: QuizQuestion[] = [
  {
    id: 'position',
    question: 'What position do you sleep in?',
    icon: <Moon className="h-6 w-6" />,
    options: [
      { label: 'Side Sleeper', value: 'side' },
      { label: 'Back Sleeper', value: 'back' },
      { label: 'Stomach Sleeper', value: 'stomach' },
      { label: 'Combination', value: 'combo' }
    ]
  },
  {
    id: 'temperature',
    question: 'Do you sleep hot or cold?',
    icon: <Thermometer className="h-6 w-6" />,
    options: [
      { label: 'I sleep hot', value: 'hot' },
      { label: 'I sleep cold', value: 'cold' },
      { label: 'Just right', value: 'neutral' }
    ]
  },
  {
    id: 'firmness',
    question: 'What firmness do you prefer?',
    icon: <Wind className="h-6 w-6" />,
    options: [
      { label: 'Soft & Plush', value: 'soft' },
      { label: 'Medium Support', value: 'medium' },
      { label: 'Firm & Supportive', value: 'firm' }
    ]
  }
]

export const RestQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value }
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getRecommendation = () => {
    if (answers.position === 'side' && answers.temperature === 'hot') {
      return {
        title: 'Cooling Memory Foam Setup',
        products: ['Cloud Memory Foam Pillow', 'Cooling Gel Mattress Topper', 'Bamboo Cooling Sheet Set'],
        description: 'Perfect for side sleepers who need cooling comfort'
      }
    }
    if (answers.firmness === 'firm') {
      return {
        title: 'Supportive Sleep System',
        products: ['Cervical Support Pillow', 'Cooling Gel Mattress Topper', 'Organic Cotton Sheet Set'],
        description: 'Ideal for those who need firm, therapeutic support'
      }
    }
    return {
      title: 'Plush Comfort Collection',
      products: ['Serenity Down Alternative Pillow', 'Plush Comfort Mattress Topper', 'Weighted Blanket'],
      description: 'Luxurious softness for cloud-like comfort'
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const recommendation = getRecommendation()
    return (
      <section className="py-16 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="calm-shadow">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky/10 mb-4">
                  <Sun className="h-8 w-8 text-sky" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Your Perfect Sleep Setup
                </h3>
                <p className="text-lg text-navy/70 mb-6">
                  {recommendation.description}
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-navy mb-4">Recommended Products:</h4>
                <ul className="space-y-2 text-navy/80">
                  {recommendation.products.map((product, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-sky" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 justify-center">
                <Button size="lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" onClick={resetQuiz}>
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]

  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Find Your Perfect Setup
          </h2>
          <p className="text-lg text-navy/70">
            Answer a few questions to get personalized recommendations
          </p>
        </div>

        <Card className="calm-shadow">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-sky/10">
                    {question.icon}
                  </div>
                  <span className="text-sm font-medium text-navy/60">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
              </div>
              
              <div className="w-full bg-secondary rounded-full h-2 mb-6">
                <div
                  className="bg-sky h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="text-2xl font-semibold text-navy mb-6">
                {question.question}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {question.options.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  size="lg"
                  onClick={() => handleAnswer(option.value)}
                  className="h-auto py-6 text-left justify-start hover:bg-sky/5 hover:border-sky transition-all"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}