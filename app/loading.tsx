import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Generate 6 skeleton cards */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="h-6 w-2/3 bg-muted animate-pulse rounded" />
            </CardHeader>
            <CardContent className="pb-4">
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted animate-pulse rounded" />
                <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
                <div className="h-4 w-4/6 bg-muted animate-pulse rounded" />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2">
                <div className="h-9 w-20 bg-muted animate-pulse rounded" />
                <div className="h-9 w-20 bg-muted animate-pulse rounded" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
