import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import { auth } from '@/lib/auth'
import ContactMessage from '@/models/ContactMessage'
import mongoose from 'mongoose'

type RouteContext = { params: Promise<{ id: string }> }

export async function PUT(req: NextRequest, { params }: RouteContext) {
  try {
    const session = await auth()
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    await dbConnect()

    const body = await req.json()
    const readState = body.read ?? true

    let message = null
    if (mongoose.Types.ObjectId.isValid(id)) {
      message = await ContactMessage.findByIdAndUpdate(
        id,
        { read: readState },
        { new: true, runValidators: true }
      ).lean()
    }

    if (!message) {
      message = await ContactMessage.findOneAndUpdate(
        { _id: id },
        { read: readState },
        { new: true }
      ).lean()
    }

    return NextResponse.json(message || { _id: id, read: readState })
  } catch (error) {
    console.error('Message PUT error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: RouteContext) {
  try {
    const session = await auth()
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { id } = await params
    await dbConnect()

    if (mongoose.Types.ObjectId.isValid(id)) {
      await ContactMessage.findByIdAndDelete(id).lean()
    } else {
      await ContactMessage.deleteOne({ _id: id }).lean()
    }

    return NextResponse.json({ message: 'Message deleted successfully', id })
  } catch (error) {
    console.error('Message DELETE error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
