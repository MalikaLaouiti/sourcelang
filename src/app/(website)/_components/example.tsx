

export default function Example() {
    return (
        <section className="py-24 sm:py-32 bg-slate-900 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Découvrez la simplicité</h2>
                    <p className="mt-6 text-lg leading-8 text-slate-300">
                        Un exemple simple qui montre la puissance de Sourcelang
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="rounded-2xl bg-slate-800 p-8 shadow-2xl">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            <span className="ml-4 text-sm text-slate-400">hello-world.src</span>
                        </div>
                        <pre className="text-sm text-slate-300 overflow-x-auto">
                            <code>{`// Sourcelang - Simple et puissant
function fibonacci(n: int) -> int {
    match n {
        0 | 1 => n,
        _ => fibonacci(n-1) + fibonacci(n-2)
    }
}

// Utilisation avec inférence de type
let result = fibonacci(10)
print("Fibonacci(10) = {result}")

// Gestion d'erreurs élégante
async function fetchData(url: string) -> Result<Data, Error> {
    try {
        let response = await http.get(url)
        Ok(response.json())
    } catch error {
        Err(error)
    }
}`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    )
}
