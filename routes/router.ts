import { Router, Request, Response } from 'express';

const router = Router();

router.get('/messages', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: '200 - Get'
    });
});

router.post('/messages', (req: Request, res: Response) => {
    const body = req.body.body;
    const from = req.body.from;

    res.json({
        ok: true,
        body,
        from
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {
    const body = req.body.body;
    const from = req.body.from;
    const id = req.params.id;

    res.json({
        ok: true,
        id,
        body,
        from
    });
});

export default router;